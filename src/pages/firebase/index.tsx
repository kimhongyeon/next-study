import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface ResData {
    parameters: any;
}

const Firebase: NextPage = () => {
    const [key1, setKey1] = useState('loading');
    const [inputKey, setInputKey] = useState('');

    const fetchData = async () => {
        const { parameters } = (await axios.get('/api/config')).data as ResData;

        setKey1(String(parameters.key1.defaultValue.value));
    };

    const updateData = async () => {
        setKey1('변경중...');

        await axios.patch('/api/change', {
            key: 'key1',
            value: inputKey,
        });

        await fetchData();
    };

    useEffect(() => {
        fetchData().then();
    }, []);
    return (
        <div>
            <div>
                <h1>key1</h1>
                <p>{key1}</p>
                <div>
                    <input
                        type="text"
                        value={inputKey}
                        onChange={(e) => {
                            setInputKey(e.target.value);
                        }}
                    />
                    <button onClick={updateData}>변경</button>
                </div>
            </div>
        </div>
    );
};

export default Firebase;
