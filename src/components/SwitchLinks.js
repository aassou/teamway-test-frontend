import { Switch, Route } from 'react-router-dom';
// import Login from '../containers/login';
import HomePage from './homepage/HomePage';
import TestPage from './personalitytest/TestPage'

// supplier
// import SupplierList from './supplier/index';
// import SupplierEdit from './supplier/edit';
// import SupplierAdd from './supplier/add';

const SwitchLinks = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/personality-test" exact component={TestPage} />
        {/* Suppliers */}
        {/* 
            <Route path="/suppliers" exact component={SupplierList} />
            <Route path="/suppliers/:id/update" exact component={SupplierEdit} />
            <Route path="/suppliers/add" exact component={SupplierAdd} /> 
        */}
    </Switch>
);

export default SwitchLinks;
