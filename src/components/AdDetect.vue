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
                adDetected: false
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
                context.$emit("passValue", context.adDetected);
    
            }
            // Function called if AdBlock is detected 
            function adBlockDetected() {
                context.adDetected = true
                context.$emit("passValue", context.adDetected);
    
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
        margin: 0px auto !important;
        padding: 20px 30px !important;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    
    .modal-header h3 {
        margin-top: 0 !important;
        color: #42b983;
    }
    
    .modal-body {
        margin: 20px 0 !important;
    }
    
    .modal-default-button {
        float: right;
    }
    
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
        padding: 15px !important;
        color: white
    }
    
    .button-keep-footer {
        float: right
    }
    
    .button-disable-footer {
        background-color: var(--red);
        float: left
    }
</style>
