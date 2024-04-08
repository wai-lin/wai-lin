export function printDiv(elementId: string) {
	const divContents = document.getElementById(elementId)!.innerHTML
	const a = window.open("", "", "height=500, width=500")!
	a.document.write("<html><body>")
	a.document.write(divContents)
	a.document.write("</body></html>")
	a.document.close()
	a.print()
}
