export const COURSES:any = [
    {
        id:1,
        courseName:'Angular',
        // imgSrc:'/assets/images/ang.png',
        desc:'Angular core deep dive',
        lessonCount:10,
        category:'Advanced',
        dtls:'Advanc'
    },
    {
        id:2,
        courseName:'Javascript',
        imgSrc:'/assets/images/javascript.jpg',
        desc:'javascript functionality',
        lessonCount:6,
        category:'Beginner',
        dtls:'Begin'
    },
    {
        id:3,
        courseName:'Mongo',
        // imgSrc:'/assets/images/mongo.png',
        desc:'mongo db database',
        lessonCount:12,
        category:'Pro',
        // dtls:'unknown'
    },
    {
        id:4,
        courseName:'Mongo',
        // imgSrc:'/assets/images/mongo.png',
        desc:'mongo db database',
        lessonCount:12,
        category:'Pro',
        // dtls:'unknown'
    },
    {
        id:5,
        courseName:'Mongo',
        // imgSrc:'/assets/images/mongo.png',
        desc:'mongo db database',
        lessonCount:12,
        category:'Pro',
        // dtls:'unknown'
    }
]
export function findCourseById(courseId:number){
    return COURSES.find((course: { id: number }) => course.id === courseId)
}