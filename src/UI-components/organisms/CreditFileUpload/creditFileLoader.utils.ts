export const checkLoanDocumentSize = (
    maxSingleFileSize: number,
    maxCombinedFileSize: number,
    maxFiles: number
) => {
    let size: number = 0
    let fileCount: number = 0
    return (result: boolean, current: File | null) => {
        if (current) {
            size += current.size
            fileCount++
            result =
                size > maxCombinedFileSize ||
                (fileCount > maxFiles && current.size > maxSingleFileSize)
            return result
        }
        return result
    }
}
