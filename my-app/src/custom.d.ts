declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {title?: string};

    const scr: string;
    export default scr;
}