/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export {}

declare global {
	export interface ResumeJson {
		avatarUrl: string
		name: string
		positionAppliedFor: string

		biography: string

		personalInfo: {
			religion: string
			nationality: string
			dateOfBirth: string
			maritalStatus?: "single" | "married" | "divorced" | "common-law" | "separated" | "widowed"
			address: string
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
			history: Array<{
				educationTitle: string
				fromYear: string
				toYear: string
			}>
		}>

		skills: string[]

		references: Array<{
			personName: string
			company: string
			position: string
			email: string
			phone?: string
		}>

		workExperiences: Array<{
			assignedPosition: string
			companyName: string
			companyUrl: string
			fromDate: string
			toDate: string
			descriptions: string[]
			links?: string[]
		}>

		achievements: string[]
	}
}
