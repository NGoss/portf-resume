export interface ResumeData {
    name :string,
    email :string,
    github :string,
    tech :Tech,
    experience :Array<Experience>
}

export interface Tech {
    frontend :Array<string>,
    backend :Array<string>,
    database :Array<string>,
    pipeline :Array<string>
}

export interface Experience {
    company :string,
    title :string,
    startDate :Date,
    endDate? :Date, /*null if current job*/
    description :Array<string>
}