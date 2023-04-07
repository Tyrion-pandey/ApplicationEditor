import Input from "./Input";


export const SelectInput = () => {

    return (
        <>
        <div className="flex">
            <select className={classes.select}>
                <option value="Android">Android</option>
                <option value="IOS">IOS</option>
            </select>
            
            <Input placeholder="platform"/>
            <Input placeholder="version"/>
            <Input placeholder="package"/>
            <Input placeholder="installer Link"/>
        </div>
        </>
    )
}