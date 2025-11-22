import { EnumValues } from "zod/v3";

export const JOBTYPES: EnumValues = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship', 'Other'];

export const JOB_LISTING_COLUMNS: string[] = [
    'Role',
    'Status',
    'Date Posted',
    'Due Date',
    'Job Type',
    'Applicants',
    'Needs',
];

export const JOB_LISTING_DATA = [
    {
    role: "Flutter Developer",
    status: "Live",
    datePosted: "22 Nov 2025",
    dueDate: "22 Dec 2025",
    jobType: "Full-time",
    applicants: 25,
    needs: 5,
}
];