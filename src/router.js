import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));
const TodosList = lazy(() => import('./componets/todos/todos-list'));
const TodoDetails = lazy(() => import('./componets/todos/todo-details'));

const routes = [
    {
        path: '/',
        component: lazy(() => import('./home')),
        props: (props) => ({ incrementby: "5", click: props.sayHello })
    },
    {
        path: '/about',
        component: lazy(() => import('./about'))
    },
    {
        path: '/contact',
        component: lazy(() => import('./contact'))
    }
]

export default function AppRouter(props) {
    const componentProps = props;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {/*<Route exact path='/' component={Home} /> */}
                <Route exact path='/'>
                    <Home incrementby="5" click={props.sayHello}>
                        <p>Component Content Inside Home Element</p>
                    </Home>
                </Route>
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/todos' component={TodosList} />
                <Route exact path='/todos/:id' component={TodoDetails} />
                {/* the following code is and alternative way, and it works good */}
                {/* {
                    routes.map((route, index) =>
                        // <Route exact path={route.path} component={route.component} />
                        <Route key={index} exact path={route.path} render={props => (
                            <route.component  {...route.props(componentProps)} >
                            </route.component>
                        )} />
                    )
                } */}
            </Switch>
        </Suspense>
    );
}