import { FunctionComponent } from "react"
import { ITableComponent } from "./ITableComponent";

const  TableComponent: FunctionComponent<ITableComponent> = (props: ITableComponent): JSX.Element => {
    const { users } = props;

    return (
        <table>

        </table>
    )
}

export default TableComponent;