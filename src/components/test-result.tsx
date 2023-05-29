import {BsFillCheckCircleFill, BsFillDashCircleFill} from "react-icons/bs"
import Convert from "ansi-to-html"
import styles from "./test-result.module.scss"
import data from "../../data/test-props.json"
import React from "react";
import {ErrorBoundary} from "react-error-boundary";
import Error from "../components/error"
import Koans from "../../koans/index"

const convert = new Convert({
    fg: '#0c2340',
    newline: true
})
export interface TestResultProps {
    testName: string
    success?: boolean
    message?: string
}


const TestResult = ({testName, success, message}: TestResultProps) => {

    const showPreview = () => {
        const Koan = Koans[testName]
        return <div className={styles.koanViewer}>
            <Koan {...data[testName]}/>
        </div>
    }

    return testName && message ?
        <div className={styles.resultContainer}>
            <h4>Test Result</h4>
            <div className={styles.testResult}>
                <div className={styles.resultInfo}>
                    <p>{success ? <BsFillCheckCircleFill className={styles.success}/> :
                        <BsFillDashCircleFill className={styles.fail}/>}</p>
                    <div className={styles.errorMessage}
                         dangerouslySetInnerHTML={{__html: convert.toHtml(message ?? '')}}></div>
                </div>
            </div>
            <h4>Preview</h4>
            <ErrorBoundary FallbackComponent={Error}>
                {showPreview()}
            </ErrorBoundary>
        </div> : null
}

export default TestResult
