import Icon from "components/Icon/Icon";

const Filters = () => {
    return (
        <>
            <form>
                <label>
                    Location
                    <input placeholder="City" name="location" />
                    <Icon width='18px' height='20px' fill='none' stroke='#101828' name='icon-location'/>
                </label>
                <button type="submit">Search</button>

                <div>
                    Filters
                </div>
            </form>
        </>
    )
}

export default Filters;