function Link(props) {
    return (
        <a
        className={`link ${props.className}`}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        >
            {props.children} {/*Text Content or inner html of the link*/}
        </a>
    );
    }
export default Link;