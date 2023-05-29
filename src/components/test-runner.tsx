'use client';
import React, {useState} from "react";
import TestResult, {TestResultProps} from "@/components/test-result";



const TestRunner = async ({testName} : {testName:string}) => {
    const [results, setResults] = useState<TestResultProps>(null)
    const [isLoading, setIsLoading] = useState(false)
    const runTest = async () => {
        setIsLoading(true)
        const response = await fetch(`/${testName}`, {method: 'POST'}).then(res => res.json())
        setResults({
            success: response.success,
            message: response.success ? 'Passed' : response.message,
            testName: testName
        })
        setIsLoading(false)
    }

    return (<>
        <button onClick={runTest}>Validate</button>
        { isLoading ? <h4>Loading...</h4> :  <TestResult testName={testName} {...results} /> }
    </>)
}

export default TestRunner
