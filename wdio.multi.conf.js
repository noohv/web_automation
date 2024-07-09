import { config as baseConfig } from './wdio.conf.js'
import merge from 'deepmerge'

export const config = merge(baseConfig, {
    maxInstances: 4,
    capabilities: {
        browser1: {
            capabilities: {
                browserName: 'chrome'
            }
        },
        browser2: {
            capabilities: {
                browserName: 'chrome'
            }
        }
    }
})