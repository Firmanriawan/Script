document.write( '<script src=\"https://cdn.jsdelivr.net/npm/hls.js@latest\"></script>\n' );
document.write( '\n' );
document.write( '<video width=\"100%\" id=\"video\"></video>\n' );
document.write( '\n' );
document.write( '<script>\n' );
document.write( '\n' );
document.write( '  if(Hls.isSupported()) {\n' );
document.write( '\n' );
document.write( '    var video = document.getElementById(\'video\');\n' );
document.write( '\n' );
document.write( '    var hls = new Hls();\n' );
document.write( '\n' );
document.write( '    hls.loadSource(\'http://stream1.ninmedia.tv/live/nin-inspira.stream_nin/playlist.m3u8\');\n' );
document.write( '\n' );
document.write( '    hls.attachMedia(video);\n' );
document.write( '\n' );
document.write( '    hls.on(Hls.Events.MANIFEST_PARSED,function() {\n' );
document.write( '\n' );
document.write( '      video.play();\n' );
document.write( '\n' );
document.write( '  });\n' );
document.write( '\n' );
document.write( ' }\n' );
document.write( '\n' );
document.write( '</script>\n' );
document.write( '\n' );
document.write( '</div>' );
