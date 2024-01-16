import Select from "react-select";

interface DirectionOptions {
    label: string;
    value: "asc" | "desc";
}

interface ControlsProps {
    onSortFieldChange: (value: string) => void;
    onSortDirectionChange: (value: "asc" | "desc") => void;
}

const Controls = (props: ControlsProps) => {
    const {onSortFieldChange, onSortDirectionChange} = props;

    const fieldOptions = [
        {label: "Name", value: "name"},
        {label: "Company", value: "company.name"},
        {label: "Email", value: "email"},
    ];

    const directionOptions: DirectionOptions[] = [
        {label: "Ascending", value: "asc"},
        {label: "Descending", value: "desc"},
    ];

    return (
        <div className="gallery-controls controls">
            <div className="form-group group">
                <label htmlFor="sort-field" className="label">
                    Sort Field
                </label>
                <Select options={fieldOptions} inputId="sort-field" className="input"
                        onChange={(e) => onSortFieldChange(e?.value!)}/>
            </div>
            <div className="form-group group">
                <label htmlFor="sort-direction" className="label">
                    Sort Direction
                </label>
                <Select
                    options={directionOptions}
                    inputId="sort-direction"
                    className="input"
                    onChange={(e) => onSortDirectionChange(e?.value!)}
                />
            </div>
        </div>
    );
};

export default Controls;
