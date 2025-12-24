import { Route } from 'react-router-dom'
import routeRule from './routeRule'
export function creatRouter(routeArr) {
      return routeArr.map((item) => {
            if(item.children&&item.children.length>0){
               return  <Route key={item.path} path={item.path} Component={routeRule[item.compont]}>
                       {creatRouter(item.children)} 
               </Route>
               
            }
            else
            return <Route key={item.path} path={item.path} Component={routeRule[item.compont]}></Route>
        })
}