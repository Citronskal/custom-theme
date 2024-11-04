// import { useBlockProps } from '@wordpress/block-editor';

// export default function save() {
// 	return (
// 		<p { ...useBlockProps.save() }>
// 			I don't know what I am doing - save
// 		</p>
// 	);
// }

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { text, mediaURL } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div style={{ display: 'flex', gap: '20px' }}>
                {/* Text Column */}
                <div style={{ flex: '1' }}>
                    <RichText.Content tagName="p" value={text} />
                </div>
                
                {/* Media Column */}
                <div style={{ flex: '1' }}>
                    {mediaURL && <img src={mediaURL} alt="Media content" />}
                </div>
            </div>
        </div>
    );
}
