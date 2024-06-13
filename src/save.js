/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({ attributes }) {
	const { text, speed } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div class="swiper scrollingText">
				<div class="swiper-wrapper">
					{Array.apply(0, Array(6)).map(function (_, i) {
						return (
							<div key={i} class="swiper-slide">
								<p class="swiper-text">{text}</p>
							</div>
						);
					})}
				</div>
			</div>
			<script>{`var sliderSpeed=${speed}`}</script>
		</div>
	);
}
