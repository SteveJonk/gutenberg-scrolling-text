/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

import {
	__experimentalNumberControl as NumberControl,
	PanelBody,
	TextControl,
} from "@wordpress/components";

import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { text, speed } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "scrolling-text")}>
					<TextControl
						label={__("Text", "scrolling-text")}
						value={text || ""}
						onChange={(value) => setAttributes({ text: value })}
					/>
					<NumberControl
						label={__("Speed", "scrolling-text")}
						isShiftStepEnabled={true}
						onChange={(value) => setAttributes({ speed: value })}
						shiftStep={0.1}
						value={speed}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<p
					class="swiper-text"
					style={{ maxWidth: "800px", overflow: "hidden" }}
				>
					{!!text ? text : "Write a text in the settings"}
				</p>
			</div>
		</>
	);
}
