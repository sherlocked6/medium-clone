import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt'
import { use } from 'hono/jsx';


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: any
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header("Authorization") || "";
  
    if (!jwt) {
          c.status(401);
          return c.json({ error: "unauthorized" });
      }
    
    const token = jwt.split(" ")[1]
    try{
      const payload = await verify(token, c.env.JWT_SECRET);
  
      if(!payload){
        c.status(401)
        return c.json({ error: "unauthorized"})
      }

      console.log(payload.id)
    
      c.set('userId', payload.id)
      await next()
    }
    catch{
      c.status(401)
      return c.json({ error: "Incorrect jwt"})
    }
  })

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const userId = c.get("userId");

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })

    return c.json({
        id: post.id
    })
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const userId = c.get("userId");

    await prisma.post.update({
        where: {
            id: body.id,
            authorId: userId
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.text("updated post")
})

//pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const posts = await prisma.post.findMany({})
    return c.json({posts})
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param('id');

    console.log(id)

    const post = await prisma.post.findFirst({
        where: {
            id
        }
    })
    return c.json({ post })
})

