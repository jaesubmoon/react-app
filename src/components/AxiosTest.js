import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosTest = () => {
    // (1) state
    const [data, setDate] = useState([]);
    const [loading, setLoading] = useState(false);

    // (2)
    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
        setDate(response.data);
        setLoading(false);
    }

    // 렌더링할 마다 호출
    // 빈 배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    // data를 JSON Object로 변환해서 key, value 추출 
    const jsonObj = JSON.parse(JSON.stringify(data));
    let result = [];
    for (var key in jsonObj) {
        result.push(
            <tr><td>{key}</td><td>{jsonObj[key]}</td></tr>
        )
    }


    return (
        <div>
            <h3>서버로부터 받아온 값</h3>
            <table border="1">
                {result}
            </table>
        </div>
    );
};

export default AxiosTest;