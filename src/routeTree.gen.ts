/* eslint-disable */
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
const IndexRoute=IndexRouteImport.update({id:'/',path:'/',getParentRoute:()=>rootRouteImport} as any)
export interface FileRoutesByFullPath{'/':typeof IndexRoute} export interface FileRoutesByTo{'/':typeof IndexRoute} export interface FileRoutesById{'__root__':typeof rootRouteImport;'/':typeof IndexRoute} export interface FileRouteTypes{fileRoutesByFullPath:FileRoutesByFullPath;fullPaths:'/';fileRoutesByTo:FileRoutesByTo;to:'/';id:'__root__'|'/';fileRoutesById:FileRoutesById}
declare module '@tanstack/react-router'{interface FileRoutesByPath{'/':{id:'/';path:'/';fullPath:'/';preLoaderRoute:typeof IndexRouteImport;parentRoute:typeof rootRouteImport}}}
export const routeTree=rootRouteImport._addFileChildren({IndexRoute})._addFileTypes<FileRouteTypes>()
import type { getRouter } from './router.tsx'; import type { startInstance } from './start'; declare module '@tanstack/react-start'{interface Register{ssr:true;router:Awaited<ReturnType<typeof getRouter>>;config:Awaited<ReturnType<typeof startInstance.getOptions>>}}
