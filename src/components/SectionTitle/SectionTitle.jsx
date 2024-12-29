
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-2/5 md:w-1/4 mx-auto text-center mt-10">
            <em className="text-yellow-600">---{subHeading}---</em>
            <h3 className="text-3xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;