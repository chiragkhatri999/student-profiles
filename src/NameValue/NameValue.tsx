import React from "react";
import styles from "./NameValue.module.css";
type NameValueProp = {
	name: string;
	value: string;
};
class NameValue extends React.Component<NameValueProp, {}> {
	render() {
		const name = this.props.name;
		const value = this.props.value;
		return (
			<div className={styles.NV__container}>
				<span className={styles.NV__name}>{name}:</span>
				<span className={styles.NV__value}>{value}</span>
			</div>
		);
	}
}

export default NameValue;
