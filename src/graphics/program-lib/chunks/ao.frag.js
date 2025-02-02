export default /* glsl */`
#ifdef MAPTEXTURE
uniform sampler2D texture_aoMap;
#endif

void applyAO() {
    dAo = 1.0;

    #ifdef MAPTEXTURE
    dAo *= texture2D(texture_aoMap, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dAo *= saturate(vVertexColor.$VC);
    #endif

    dDiffuseLight *= dAo;
}
`;
