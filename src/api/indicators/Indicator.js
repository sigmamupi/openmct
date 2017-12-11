/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2017, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define([
        'text!./res/indicator-template.html'
    ], function (
        indicatorTemplate
    ) {

        function Indicator(openmct) {
            this.openmct = openmct;
            this.textValue = '';
            this.descriptionValue = '';
            this.cssClassValue = '';
            this.iconClassValue = '';
            this.textClassValue = '';
            this.glyphClassValue = '';
            this.node = undefined;
        }

        Indicator.prototype.text = function (text) {
            if (text !== undefined && text !== this.textValue) {
                this.textValue = text;
                Indicator.defaultDisplayFunction.call(this);
            }

            return this.textValue;
        }

        Indicator.prototype.description = function (description) {
            if (description !== undefined && description !== this.descriptionValue) {
                this.descriptionValue = description;
                Indicator.defaultDisplayFunction.call(this);
            }

            return this.descriptionValue;
        }

        Indicator.prototype.iconClass = function (iconClass) {
            if (iconClass !== undefined && iconClass !== this.iconClassValue) {
                this.iconClassValue = iconClass;
                Indicator.defaultDisplayFunction.call(this);
            }

            return this.iconClassValue;
        }

        Indicator.prototype.cssClass = function (cssClass) {
            if (cssClass !== undefined && cssClass !== this.cssClassValue) {
                this.cssClassValue = cssClass;
                Indicator.defaultDisplayFunction.call(this);
            }

            return this.cssClassValue;
        }

        Indicator.prototype.glyphClass = function (glyphClass) {
            if (glyphClass !== undefined && glyphClass !== this.glyphClassValue) {
                this.glyphClassValue = glyphClass;
                Indicator.defaultDisplayFunction.call(this);
            }

            return this.glyphClassValue;
        }

        Indicator.prototype.textClass = function (textClass) {
            if (textClass !== undefined && textClass !== this.textClassValue) {
                this.textClassValue = textClass;
                Indicator.defaultDisplayFunction.call(this);
            }

            return this.textClassValue;
        }

        function hideOrShowText(text) {
            if (text && text.length > 0) {
                return '';
            } else {
                return 'hidden';
            }
        }

        Indicator.defaultDisplayFunction = function () {
            var html = indicatorTemplate
                .replace('{{indicator.text}}', this.text())
                .replace('{{indicator.textClass}}', this.textClass())
                .replace('{{indicator.cssClass}}', this.cssClass())
                .replace('{{indicator.glyphClass}}', this.glyphClass())
                .replace('{{indicator.description}}', this.description())
                .replace('{{hideOrShowText}}', hideOrShowText(this.text()));

            if (!this.node){
                this.node = document.createElement('div');
                this.node.className = 'status-block-holder';
            }
            this.node.innerHTML = html;
            
            return this.node;
        }

        return Indicator;
});