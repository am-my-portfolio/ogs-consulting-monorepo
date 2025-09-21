import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SigningKeyNotFoundError, passportJwtSecret } from 'jwks-rsa';
import { IDecodedAccessToken } from '@am-ogs/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(private configService: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: false,
        rateLimit: true,
        jwksRequestsPerMinute: 100,
        jwksUri: `${configService.get('AUTH0_ISSUER_URL')}.well-known/jwks.json`,
        handleSigningKeyError: (err, cb) => {
          this.logger.debug({ err }, 'Error');
          if (err?.name === 'JwksError') {
            return cb(new UnauthorizedException('JwksError: Bad jwksUri'));
          } else if (err instanceof SigningKeyNotFoundError) {
            return cb(
              new UnauthorizedException(
                'SigningKeyNotFoundError: Mismatched Issuer',
              ),
            );
          }
          // TokenExpiredError
          // JsonWebTokenError: jwt issuer invalid./ jwt malformed
          return cb(err);
        },
      }),

      // jwtFromRequest: ExtractJwt.fromExtractors([
      //   ExtractJwt.fromAuthHeaderAsBearerToken(),
      //   SendgridJwtStrategy.forwardedAuthorizationExtractor,
      // ]),

      // jwtFromRequest: ExtractJwt.fromExtractors([
      //   ExtractJwt.fromHeader(GoogleHeader.X_FORWARDED_AUTHORIZATION ?? StandardHeader.AUTHORIZATION),
      //   ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ]),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.get('AUTH0_AUDIENCE'),
      issuer: `${configService.get('AUTH0_ISSUER_URL')}`,
      passReqToCallback: false,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: IDecodedAccessToken) {
    this.logger.debug('[validate]');

    return payload;
    // the decoded jwt payload will be available in the http request to the controller methods as `req.user`
    // see app.controller.ts -> authCheck() for example
  }
}
