import React from 'react';
import { Switch, Route } from "react-router-dom";

import View from './iViewAssesments'
import Create from './iCreateAssesments'
import Edit from './iEditAssesments'
import Delete from './iDeleteAssesments'

const Main = () => (
    <Switch>
        <Route exact path="/" component={View} />
        <Route path="/createAssessments" component={Create} />
        <Route path="/editAssessments" component={Edit} />
        <Route path="/deleteAssessments" component={Delete} />
    </Switch>
);

export default Main;