//stores building coordinates in storeArray and by scaling
//cubeVerticies by scaleMatrix. Stores texcoordinates in texArray
//only scale by y coordinate
function makeBuilding(storeArray, texArray, scaleMatrix, depth, count)
{
	//empties arrays
	while(storeArray.length > 0)
		{storeArray.pop();}
	while(texArray.length > 0)
		{texArray.pop();}
	
	var yFactor = scaleMatrix[1][1];
	var temp;
	var randX = Math.floor((random() * 3) + count);
	var randY = Math.floor((random() * 3) + count);
	
	for(var i =0; i <18; i++)
	{
		temp = (multChris(scaleMatrix, cubeArray[i]));
		storeArray.push( multChris( translate(randX, 0, depth ), temp ) );
		texArray.push( vec2(cubeTexCoordsArray[i][0], cubeTexCoordsArray[i][1] * yFactor) );
		
	}
	for(i =18; i <24; i++)
	{
		temp = (multChris(scaleMatrix, cubeArray[i]));
		storeArray.push( multChris( translate(randX, 0, depth ), temp ) );
		texArray.push( cubeTexCoordsArray[i] );
	}
	for(i =24; i <36; i++)
	{
		temp = (multChris(scaleMatrix, cubeArray[i]));
		storeArray.push( multChris( translate(randX, 0, depth ), temp ) );
		texArray.push( vec2(cubeTexCoordsArray[i][0], cubeTexCoordsArray[i][1] * yFactor) );
	}
	addAABB( mult( translate(randX, 0, depth), scaleMatrix ) );
}

function quad(a, b, c, d) {
     cubeArray.push(cubeVerticies[a]); 
     cubeTexCoordsArray.push(buildingTexCoord[0]);

     cubeArray.push(cubeVerticies[b]); 
     cubeTexCoordsArray.push(buildingTexCoord[1]); 

     cubeArray.push(cubeVerticies[c]); 
     cubeTexCoordsArray.push(buildingTexCoord[2]); 
   
     cubeArray.push(cubeVerticies[a]); 
     cubeTexCoordsArray.push(buildingTexCoord[0]); 

     cubeArray.push(cubeVerticies[c]); 
     cubeTexCoordsArray.push(buildingTexCoord[2]); 

     cubeArray.push(cubeVerticies[d]); 
     cubeTexCoordsArray.push(buildingTexCoord[3]);   
}

function makeCube()
{
    quad( 1, 0, 3, 2 );
    quad( 2, 3, 7, 6 );
    quad( 3, 0, 4, 7 );
    quad( 6, 5, 1, 2 ); //roof part
    quad( 6, 7, 4, 5 );
    quad( 5, 4, 0, 1 );
}

//only can call once,
//makes the world cube
function makeWorld()
{
	for(var i=0; i <36; i++)
	{
		worldArray.push( (multChris(scale(160,40,100), cubeArray[i])) ); 
		worldTexCoords.push( ( vec2(cubeTexCoordsArray[i][0] *10, cubeTexCoordsArray[i][1] * 10) ) );
		worldTexCoordsFar.push( ( vec2(cubeTexCoordsArray[i][0] *1, cubeTexCoordsArray[i][1] * .5) ) );
		
	}
}


function loadTextures()
{ 	//make textures

	//building1
	buildingTex1 = gl.createTexture();
	buildingTex1.image = new Image();
    buildingTex1.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, buildingTex1);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, buildingTex1.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	buildingTex1.image.src = "images/buildings/1.jpg";
	
	//building2
	buildingTex2 = gl.createTexture();
	buildingTex2.image = new Image();
    buildingTex2.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, buildingTex2);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, buildingTex2.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	buildingTex2.image.src = "images/buildings/2.jpg";
	
	
	//building3
	buildingTex3 = gl.createTexture();
	buildingTex3.image = new Image();
    buildingTex3.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, buildingTex3);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, buildingTex3.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	buildingTex3.image.src = "images/buildings/3.jpg";
	
	//building4
	buildingTex4 = gl.createTexture();
	buildingTex4.image = new Image();
    buildingTex4.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, buildingTex4);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, buildingTex4.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	buildingTex4.image.src = "images/buildings/4.jpg";
	
	//building5
	buildingTex5 = gl.createTexture();
	buildingTex5.image = new Image();
    buildingTex5.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, buildingTex5);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, buildingTex5.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	buildingTex5.image.src = "images/buildings/5.jpg";
	
	//building roof
	roofTex = gl.createTexture();
	roofTex.image = new Image();
    roofTex.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, roofTex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, roofTex.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	roofTex.image.src = "images/roof.jpg";
	
	//world floor
	floorTex = gl.createTexture();
	floorTex.image = new Image();
    floorTex.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, floorTex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, floorTex.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	floorTex.image.src = "images/lava.jpg";
	
	//world sky
	skyTex = gl.createTexture();
	skyTex.image = new Image();
    skyTex.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, skyTex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, skyTex.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	skyTex.image.src = "images/space.bmp";
	
	
	farTex = gl.createTexture();
	farTex.image = new Image();
    farTex.image.onload = function(){
	gl.bindTexture(gl.TEXTURE_2D, farTex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, farTex.image);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }
	farTex.image.src = "images/skybox/negx.jpg";

}

function loadBuildings(depth)
{
	//produces integer 1-5
	var r1 = Math.floor((random() * 5) + 1);
	var r2 = Math.floor((random() * 5) + 1);
	var r3 = Math.floor((random() * 5) + 1);
	var r4 = Math.floor((random() * 5) + 1);
	var r5 = Math.floor((random() * 5) + 1);
	
	//make 5 buildings
	makeBuilding(buildingPointsArray1,buildingTexCoordsArray1, scale(1,r1,1), depth, 1 ); //1-3
	makeBuilding(buildingPointsArray2,buildingTexCoordsArray2, scale(1,r2,1), depth, -2 ); // -2-0
	makeBuilding(buildingPointsArray3,buildingTexCoordsArray3, scale(1,r3,1), depth, 4 ); //4-6
	makeBuilding(buildingPointsArray4,buildingTexCoordsArray4, scale(1,r4,1), depth, -5 ); //-5- -2
	makeBuilding(buildingPointsArray5,buildingTexCoordsArray5, scale(1,r5,1), depth, 7 ); //7-9
}

function loadBuffers()
{
	//building1
	buildingGeoBuffer1= gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer1 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingPointsArray1), gl.STATIC_DRAW );
	buildingTexBuffer1 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer1 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingTexCoordsArray1), gl.STATIC_DRAW );

	//building2
	buildingGeoBuffer2= gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer2 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingPointsArray2), gl.STATIC_DRAW );
	buildingTexBuffer2 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer2 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingTexCoordsArray2), gl.STATIC_DRAW );
	
	//building3
	buildingGeoBuffer3= gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer3 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingPointsArray3), gl.STATIC_DRAW );
	buildingTexBuffer3 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer3 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingTexCoordsArray3), gl.STATIC_DRAW );
	
	//building4
	buildingGeoBuffer4= gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer4 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingPointsArray4), gl.STATIC_DRAW );
	buildingTexBuffer4 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer4 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingTexCoordsArray4), gl.STATIC_DRAW );
	
	//building5
	buildingGeoBuffer5= gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer5 );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingPointsArray5), gl.STATIC_DRAW );
	buildingTexBuffer5 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer5 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(buildingTexCoordsArray5), gl.STATIC_DRAW );
	
	//world
	
	worldBuffer= gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, worldBuffer );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(worldArray), gl.STATIC_DRAW );
	
	//floor
	floorTexBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, floorTexBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(worldTexCoords), gl.STATIC_DRAW );
    
    //far wall
    farTexBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, farTexBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(worldTexCoordsFar), gl.STATIC_DRAW );

    //plane buffer
   	planeBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, planeBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(Indices), gl.STATIC_DRAW );
    
	
}


function decideTexture(num)
{
	var randomTex;
	
	switch(num) {
    case 1:
        randomTex = buildingTex1
        break;
    case 2:
        randomTex = buildingTex2
        break;
	case 3:
        randomTex = buildingTex3
        break;
	case 4:
        randomTex = buildingTex4
        break;
	case 5:
        randomTex = buildingTex5
        break;
	}
	return randomTex;
}

function populateBuildings()
{
	var randomTex;
	
	//building1
	var r1 = Math.floor((random() * 5) + 1);
	randomTex = decideTexture(r1);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer1 );
	gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer1 );
	gl.vertexAttribPointer( vBuildTexCoord, 2, gl.FLOAT, false, 0, 0 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 0, 18 );
	gl.bindTexture(gl.TEXTURE_2D, roofTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 18, 6 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 24, 12 );
	
	//building2
	r1 = Math.floor((random() * 5) + 1);
	randomTex = decideTexture(r1);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer2 );
	gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer2 );
	gl.vertexAttribPointer( vBuildTexCoord, 2, gl.FLOAT, false, 0, 0 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 0, 18 );
	gl.bindTexture(gl.TEXTURE_2D, roofTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 18, 6 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 24, 12 );
	
	//building3
	r1 = Math.floor((random() * 5) + 1);
	randomTex = decideTexture(r1);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer3 );
	gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer3 );
	gl.vertexAttribPointer( vBuildTexCoord, 2, gl.FLOAT, false, 0, 0 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 0, 18 );
	gl.bindTexture(gl.TEXTURE_2D, roofTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 18, 6 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 24, 12 );
	
	//building4
	r1 = Math.floor((random() * 5) + 1);
	randomTex = decideTexture(r1);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer4 );
	gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer4 );
	gl.vertexAttribPointer( vBuildTexCoord, 2, gl.FLOAT, false, 0, 0 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 0, 18 );
	gl.bindTexture(gl.TEXTURE_2D, roofTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 18, 6 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 24, 12 );
	
	//building5
	r1 = Math.floor((random() * 5) + 1);
	randomTex = decideTexture(r1);
	
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingGeoBuffer5 );
	gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ARRAY_BUFFER, buildingTexBuffer5 );
	gl.vertexAttribPointer( vBuildTexCoord, 2, gl.FLOAT, false, 0, 0 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 0, 18 );
	gl.bindTexture(gl.TEXTURE_2D, roofTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 18, 6 );
	gl.bindTexture(gl.TEXTURE_2D, randomTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 24, 12 );
	

}

function populateWorld()
{
	gl.bindBuffer( gl.ARRAY_BUFFER, worldBuffer );
	gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
	gl.bindBuffer( gl.ARRAY_BUFFER, floorTexBuffer );
	gl.vertexAttribPointer( vBuildTexCoord, 2, gl.FLOAT, false, 0, 0 );
	gl.bindTexture(gl.TEXTURE_2D, floorTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 12, 6 );
	
	gl.bindTexture(gl.TEXTURE_2D, skyTex);
	gl.uniform1i(samplerLoc, 0);
	gl.drawArrays( gl.TRIANGLES, 18, 6 );	
	
}
function drawPlane()
{
	gl.bindBuffer( gl.ARRAY_BUFFER, planeBuffer );
	gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
	gl.uniform1i(changeColorLoc, 1.0);
	gl.drawArrays( gl.LINE_LOOP, 0, 87 );
	gl.uniform1i(changeColorLoc, 0.0);
	
	
}
