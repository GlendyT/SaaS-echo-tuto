export const EMBED_CONFIG = {
    WIDGET_URL: import.meta.env.VITE_WIDGET_URL || "http://localhost:3001",
    DEFAULT_ORG_ID: "org_34icdDrrYWiBupB5OWrQaZ383iu",
    DEFAULT_POSITION: "bottom-right" as const
}

//TODO: To build it with a different url we should run on the terminal VITE_WIDGET_URL=https://differenturl.com pnpm buildorg_34icdDrrYWiBupB5OWrQaZ383iu