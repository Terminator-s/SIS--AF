import React from 'react';
import { Switch, Route } from "react-router-dom";

import View from './sViewAssesments'
import Upload from './sUploadAssesments'
import Edit from './sEditAssesments'
import Delete from './sDeleteAssesments'

const Main = () => (
    <Switch>
        <Route exact path="/" component={View} />
        <Route path="/uploadAssessments" component={Upload} />
        <Route path="/editAssessments" component={Edit} />
        <Route path="/deleteAssessments" component={Delete} />
    </Switch>
);

export default Main;