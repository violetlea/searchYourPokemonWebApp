export default function HeaderDefault(props) {
	const { title } = props;

	return (
		<div className="marginBottomHead">
			<img
				className="imgHeader"
				src="/images/pngwing.com.png"
				alt="image first starter pokemon with derp face"
			/>
			<br />
			<h1 className="headTitle">{title}</h1>
		</div>
	);
}
