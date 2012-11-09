<?php
/**
 * MIT License
 * ===========
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * @author      Serban Ghita <serbanghita@gmail.com>
 * @license     http://www.opensource.org/licenses/mit-license.php  MIT License
 * @link        https://github.com/serbanghita/working.js
 * @description Include this file when developing working.js ;)
 */

$jsFiles = array(
    'intro.js',
    'core.js',
    'utils.js',
    'event.js',
    'ajax.js',
    'expose.js',
    'outro.js'
);

$workingJs = '';

foreach($jsFiles as $jsFileName){

    $handle = fopen('src/'.$jsFileName, "r");
    $workingJs .= "\n".fread($handle, filesize('src/'.$jsFileName)). "\n";
    fclose($handle);

}

header("Content-type: text/javascript");
echo $workingJs;