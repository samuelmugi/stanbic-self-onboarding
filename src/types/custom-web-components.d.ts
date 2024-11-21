declare namespace JSX {
    interface IntrinsicElements {
        'selfie-capture-screens': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            'hide-instructions'?: boolean;
            'show-navigation'?: boolean;
        };
        'selfie-capture': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'selfie-capture-instructions': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        'selfie-capture-review': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            'data-image'?: string;
            'hide-back-to-host'?: boolean;
        };
    }
}