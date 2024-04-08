/// <reference types="astro/client" />

export {}

declare global {
	export interface ResumeJson {
		name: string
		positionAppliedFor: string

		biography: string

		personalInfo: {
			religion: string
			nationality: string
			dateOfBirth: string
			maritalStatus?: "single" | "married" | "divorced" | "common-law" | "separated" | "widowed"
		}

		contactInfo: {
			email: string[]
			phone: string[]
			links: Array<{
				icon?: string
				label: string
				url: string
			}>
		}

		spokenLanguage: Array<{
			label: string
			proficiency: "Beginner" | "Intermediate" | "Fluent" | "First Language"
		}>

		educationHistory: Array<{
			schoolName: string
			educationTitle: string
			fromYear: string
			toYear: string
			note?: string
		}>

		skills: {
			jobRelated: string[]
			nonJobRelated: string[]
		}

		workExperiences: Array<{
			assignedPosition: string
			companyName: string
			fromDate: string
			toDate: string
			descriptions: string[]
		}>

		references: Array<{
			personName: string
			company: string
			position: string
			email: string
			phone?: string
		}>
	}
}
