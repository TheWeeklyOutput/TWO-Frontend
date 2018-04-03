<template>
    <div>
        <transition name="modal">
            <div class="ad-detect-window" v-if="adDetected">
                <div class="modal-wrapper">
                    <div class="modal-container">
    
                        <div class="modal-header">
                            <slot name="header">
                                Pardon the interruption!
                            </slot>
                        </div>
    
                        <div class="modal-body">
                            <slot name="body">
                                Do you really want to continue with your AdBlocker enabled?
                            </slot>
                        </div>
    
                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="button-keep-footer button-ad-footer" @click="closeWindow()">
                                    Continue
                                </button>
    
                                <button class="button-disable-footer button-ad-footer" @click="disableAdBlock()">
                                    I disabled it!
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
    
        </transition>
    
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                adDetected: Boolean
            }
        },
        methods: {
            closeWindow() {
                this.$emit("passValue", false);
                this.adDetected = false
            },
            disableAdBlock() {
                this.$router.go({
                    path: this.$router.path,
                })
    
            }
        },
        mounted() {
            // Function called if AdBlock is not detected 
            let context = this
    
            function adBlockNotDetected() {
                context.adDetected = false
            }
            // Function called if AdBlock is detected 
            function adBlockDetected() {
                context.adDetected = true
                context.$emit("passValue", context.adDetected);
                console.log('ADBLOCK')
    
            }
    
            // Recommended audit because AdBlock lock the file 'fuckadblock.js'  
            // If the file is not called, the variable does not exist 'fuckAdBlock' 
            // This means that AdBlock is present 
            if (typeof fuckAdBlock === 'undefined') {
                adBlockDetected();
            } else {
                fuckAdBlock.onDetected(adBlockDetected);
                fuckAdBlock.onNotDetected(adBlockNotDetected);
                // and|or 
                fuckAdBlock.on(true, adBlockDetected);
                fuckAdBlock.on(false, adBlockNotDetected);
                // and|or 
                fuckAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
            }
        }
    
    }
</script>

<style>
    .ad-detect-window {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    
    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }
    
    .modal-body {
        margin: 20px 0;
    }
    
    .modal-default-button {
        float: right;
    }
    
    
    /*
                 * The following styles are auto-applied to elements with
                 * transition="modal" when their visibility is toggled
                 * by Vue.js.
                 *
                 * You can easily play with the modal transition by editing
                 * these styles.
                 */
    
    .modal-enter {
        opacity: 0;
    }
    
    .modal-leave-active {
        opacity: 0;
    }
    
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    
    .button-ad-footer {
        display: block !important;
        background-color: var(--grey-text);
        padding: 15px;
        color: white
    }
    
    .button-keep-footer {
        float: left
    }
    
    .button-disable-footer {
        background-color: var(--red);
        float: right
    }
</style>
