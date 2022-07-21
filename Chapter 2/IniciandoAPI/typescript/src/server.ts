import express from 'express'
import CreateCourseService from './CreateCourseService'
import { CreateCourse }  from './routes'

const app = express()

app.get('/', CreateCourse)

app.listen(3333)