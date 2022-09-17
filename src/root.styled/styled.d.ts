import 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme {
        darker: {
            black: string,
            white: string
        },
        lighter: {
            black: string,
            white: string
        }
    }
}