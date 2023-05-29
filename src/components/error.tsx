'use client'
const Error = ({error, reset}) => {
    return <div>
        <p>Component currently unable to render due to compilation errors file.</p>
        <p>Fix the errors in koans to see a preview</p>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Retry</button>
    </div>
}

export default Error
