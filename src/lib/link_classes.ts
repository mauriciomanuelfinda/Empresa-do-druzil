export const linkClasses = (path: string, pathname: string) => {
    const baseClasses = "transition-colors flex items-center gap-1 hover:text-dourado"
    const activeClasses = pathname === path ? "text-dourado border-b-2 border-dourado" : "text-white"
    return `${baseClasses} ${activeClasses}`
}