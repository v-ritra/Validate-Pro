/* eslint-disable */
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ApiValidateRouteImport } from './routes/api/validate'
const IndexRoute=IndexRouteImport.update({id:'/',path:'/',getParentRoute:()=>rootRouteImport} as any)
const ApiValidateRoute=ApiValidateRouteImport.update({id:'/api/validate',path:'/api/validate',getParentRoute:()=>rootRouteImport} as any)
export interface FileRoutesByFullPath{'/':typeof IndexRoute;'/api/validate':typeof ApiValidateRoute}
export interface FileRoutesByTo{'/':typeof IndexRoute;'/api/validate':typeof ApiValidateRoute}
export interface FileRoutesById{'__root__':typeof rootRouteImport;'/':typeof IndexRoute;'/api/validate':typeof ApiValidateRoute}
export interface FileRouteTypes{fileRoutesByFullPath:FileRoutesByFullPath;fullPaths:'/'|'/api/validate';fileRoutesByTo:FileRoutesByTo;to:'/'|'/api/validate';id:'__root__'|'/'|'/api/validate';fileRoutesById:FileRoutesById}
declare module '@tanstack/react-router'{interface FileRoutesByPath{'/':{id:'/';path:'/';fullPath:'/';preLoaderRoute:typeof IndexRouteImport;parentRoute:typeof rootRouteImport};'/api/validate':{id:'/api/validate';path:'/api/validate';fullPath:'/api/validate';preLoaderRoute:typeof ApiValidateRouteImport;parentRoute:typeof rootRouteImport}}}
export const routeTree=rootRouteImport._addFileChildren({IndexRoute,ApiValidateRoute})._addFileTypes<FileRouteTypes>()
import type { getRouter } from './router.tsx'; import type { startInstance } from './start'; declare module '@tanstack/react-start'{interface Register{ssr:true;router:Awaited<ReturnType<typeof getRouter>>;config:Awaited<ReturnType<typeof startInstance.getOptions>>}}
