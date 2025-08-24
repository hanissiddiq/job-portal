"use client"
 
import { JOBTYPES } from "@/constants"
import { z } from "zod"
import { required } from "zod/v4-mini"
 

export const jobFormSchema = z.object({
    roles: z.string({ required_error:'Job Title is Required'}).min(3,{message:'Job Tittle must be at least 3 character'}),
    jobType: z.enum(JOBTYPES,{required_error:'You need to select a job type'}),
    salaryFrom: z.number({required_error:'Salary From is required'}),
    salaryTo: z.number({required_error:'Salary To is required'}),
    categoryId: z.string({required_error:'You need to select a category'}),
    requiredSkills: z.string().array().nonempty({message:'You need to select at least 1 skill'}),
    jobDescription: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
    responsibility: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
    whoYouAre: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
    niceToHaves: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
    benefits: z.object({benefit: z.string(),description: z.string(),}).array().nonempty({message:'Benefits must be at least 1 benefit'}),
})