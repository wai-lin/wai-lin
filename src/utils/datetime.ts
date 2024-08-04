import dayjs from "dayjs";

export function getMonth(m: string, fmt: "long" | "short" = "long") {
	const MonthsMapping = {
		"01": ["January", "Jan"],
		"02": ["February", "Feb"],
		"03": ["March", "Mar"],
		"04": ["April", "Apr"],
		"05": ["May", "May"],
		"06": ["June", "Jun"],
		"07": ["July", "Jul"],
		"08": ["August", "Aug"],
		"09": ["September", "Sep"],
		"10": ["October", "Oct"],
		"11": ["November", "Nov"],
		"12": ["December", "Dec"],
	};
	const month = MonthsMapping[m as keyof typeof MonthsMapping];
	if (fmt === "short") return month[1];
	return month[0];
}

export function dateSorter(a: string, b: string, sort: "asc" | "desc" = "asc") {
	const isBefore = dayjs(a).isBefore(dayjs(b));
	const isSame = dayjs(a).isSame(dayjs(b));

	if (isSame) return 0;
	if (isBefore) return sort === "asc" ? -1 : 1;
	return sort === "asc" ? 1 : -1;
}
