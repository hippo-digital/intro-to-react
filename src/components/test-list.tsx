import React from "react";
import fs from "fs"
import path from "path"
import styles from "./test-list.module.scss"
import TestRunner from "@/components/test-runner";

const getKoanFiles = async () : Promise<string[]> => {
    const basePath = "koans/"
    const getAllFiles = (dirPath, arrayOfFiles=null) => {
        let files = fs.readdirSync(dirPath)
        arrayOfFiles = arrayOfFiles || []

        files.forEach(function (file) {
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
            } else if(file.endsWith(".tsx") && file !== "index.tsx") {
                arrayOfFiles.push(path.join(dirPath, "/", file))
            }
        })

        return arrayOfFiles.map(s => s.replace(basePath, '').replace(/\.[^/.]+$/, ""))
    }

    const files = getAllFiles(basePath)
    files.sort((a, b) => {
        const aNum = Number.parseInt(a.split('-')[0].trim())
        const bNum = Number.parseInt(b.split('-')[0].trim())
        return aNum - bNum
    })

    return files
}

const TestList = async () => {
    const koans = await getKoanFiles()

    return (<section className={styles.testList}>
        <ul>
        {koans.map(k => {
            return <li key={k}>
                    <h3>{k}</h3>
                    <TestRunner testName={k} />
            </li>
        })}
    </ul>
    </section>)
}

export default TestList
