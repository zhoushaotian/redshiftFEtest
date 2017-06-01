import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;



function disabledDate(current) {
    return current && (current.valueOf() < Date.now() || current.valueOf() > new Date(2017, 8, 1).valueOf());
}


function App() {
    return ( < div >
        <
        RangePicker disabledDate = { disabledDate }
        showTime = {
            {
                hideDisabledOptions: true,
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            }
        }
        format = "YYYY-MM-DD HH:mm:ss" / >
        <
        /div>
    );
}

ReactDOM.render( < App / > , document.getElementById('root'));