import { Switch, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import TestPage from './personalitytest/TestPage'

const SwitchLinks = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/personality-test" exact component={TestPage} />
    </Switch>
);

export default SwitchLinks;
