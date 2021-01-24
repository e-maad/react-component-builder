import React, { useState } from 'react';
import { isJsonValid } from '../../services/validate';

const availablePreDefinedTemplate = [
    { value: 1, text: 'Template 1' },
    { value: 2, text: 'Template 2' },
    { value: 3, text: 'Multiple children hierarchy' }
]

const Dashboard = () => {

    const [url, setUrl] = useState('/pre-defined/1');
    const [selectedOption, setOption] = useState(1);
    const [customTemplate, setCustomTemplate] = useState('');
    const [formError, setFormError] = useState('');

    const onPreDefinedSelect = () => {
        setUrl(`/pre-defined/${selectedOption}`)
    }

    const onCustomTemplateSelect = () => {
        if (isJsonValid(customTemplate)) {
            setFormError('')
            setUrl(`/custom?t=${encodeURI(JSON.stringify(JSON.parse(customTemplate)))}`)
        } else {
            setFormError('JSON is invalid.')
        }
    }

    return <div>
        <h1>React Component Builder </h1>
        <div className='main-left-container'>
            <h2>Pre Defined Templates</h2>
            <span>Display pre defined template &nbsp;
            <select onChange={(e) => setOption(e.target.value)}>
                    {availablePreDefinedTemplate.map(option =>
                        <option selected={selectedOption == option.value} value={option.value}>{option.text}</option>)}
                </select>
            </span> &nbsp;
            <button onClick={onPreDefinedSelect}>Show Selected Template</button>
            <h2>Custom Templates</h2>
            <p>Enter Template here</p>
            <textarea onChange={e => setCustomTemplate(e.target.value)} className={formError ? 'form-field-error' : ''} />
            {formError ? <div className='form-error'>{formError}</div> : ''}
            <button onClick={onCustomTemplateSelect}>Show Custom Template</button>
        </div>
        <div className='main-right-container'>
            <iframe src={url}></iframe>
        </div>
    </div>
}

export default Dashboard;
